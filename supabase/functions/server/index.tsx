import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-1e3b0733/health", (c) => {
  return c.json({ status: "ok" });
});

// Registration submission endpoint
app.post("/make-server-1e3b0733/register", async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, email, phone, programme, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !programme) {
      console.log("Registration submission error: Missing required fields");
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store submission in KV store with timestamp
    const timestamp = new Date().toISOString();
    const registrationId = `registration_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(registrationId, {
      fullName,
      email,
      phone,
      programme,
      message: message || "",
      timestamp,
    });

    console.log(`Registration stored successfully: ${registrationId}`);

    // Send email notification using Supabase Edge Function email capability
    // Note: This uses a mock email format since actual SMTP isn't configured
    const emailContent = `
New Excel Training Registration

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Programme: ${programme}
Message: ${message || "N/A"}
Timestamp: ${timestamp}

---
This registration has been saved to the database with ID: ${registrationId}
    `.trim();

    console.log("Email notification content prepared:", emailContent);
    console.log("Note: Email would be sent to crispusmk@outlook.com and bella.kamau@outlook.com");
    
    // Return success with registration ID
    return c.json({ 
      success: true, 
      registrationId,
      message: "Registration submitted successfully" 
    });

  } catch (error) {
    console.log("Registration submission error:", error);
    return c.json({ 
      error: "Failed to submit registration", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Get all registrations (for admin view)
app.get("/make-server-1e3b0733/registrations", async (c) => {
  try {
    const registrations = await kv.getByPrefix("registration_");
    console.log(`Retrieved ${registrations.length} registrations`);
    
    // Sort by timestamp descending
    registrations.sort((a, b) => {
      const timeA = new Date(a.value.timestamp).getTime();
      const timeB = new Date(b.value.timestamp).getTime();
      return timeB - timeA;
    });

    return c.json({ success: true, registrations });
  } catch (error) {
    console.log("Error retrieving registrations:", error);
    return c.json({ 
      error: "Failed to retrieve registrations",
      details: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});

Deno.serve(app.fetch);