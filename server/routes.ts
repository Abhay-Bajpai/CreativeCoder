import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message submitted successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit message. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
