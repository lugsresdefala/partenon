import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for interventions
  app.get("/api/interventions", async (req, res) => {
    try {
      // Get query parameters
      const search = req.query.search as string | undefined;
      const category = req.query.category as string | undefined;
      const evidenceLevel = req.query.evidenceLevel as string | undefined;

      let interventions;

      // If search query is provided, use search method
      if (search) {
        interventions = await storage.searchInterventions(search);
      } else {
        // Otherwise get all interventions
        interventions = await storage.getAllInterventions();
      }

      // Apply category filter if provided
      if (category && category !== "all") {
        interventions = interventions.filter(
          (intervention) => intervention.category === category,
        );
      }

      // Apply evidence level filter if provided
      if (evidenceLevel && evidenceLevel !== "all") {
        interventions = interventions.filter((intervention) =>
          intervention.evidenceLevel
            .toLowerCase()
            .includes(evidenceLevel.toLowerCase()),
        );
      }

      res.json(interventions);
    } catch (error) {
      console.error("Error fetching interventions:", error);
      res.status(500).json({ message: "Failed to fetch interventions" });
    }
  });

  app.get("/api/interventions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid intervention ID" });
      }

      const intervention = await storage.getInterventionById(id);
      if (!intervention) {
        return res.status(404).json({ message: "Intervention not found" });
      }

      res.json(intervention);
    } catch (error) {
      console.error("Error fetching intervention details:", error);
      res.status(500).json({ message: "Failed to fetch intervention details" });
    }
  });

  // API routes for guidelines
  app.get("/api/guidelines", async (req, res) => {
    try {
      const guidelines = await storage.getAllGuidelines();
      res.json(guidelines);
    } catch (error) {
      console.error("Error fetching guidelines:", error);
      res.status(500).json({ message: "Failed to fetch guidelines" });
    }
  });

  app.get("/api/guidelines/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid guideline ID" });
      }

      const guideline = await storage.getGuidelineById(id);
      if (!guideline) {
        return res.status(404).json({ message: "Guideline not found" });
      }

      res.json(guideline);
    } catch (error) {
      console.error("Error fetching guideline details:", error);
      res.status(500).json({ message: "Failed to fetch guideline details" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
