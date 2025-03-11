import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const interventions = pgTable("interventions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  evidenceLevel: text("evidence_level").notNull(),
  recommendation: text("recommendation").notNull(),
  justification: text("justification").notNull(),
  specificIndications: text("specific_indications"),
  additionalConsiderations: text("additional_considerations"),
});

export const guidelines = pgTable("guidelines", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  year: integer("year").notNull(),
  description: text("description"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertInterventionSchema = createInsertSchema(interventions).omit({
  id: true,
});

export const insertGuidelineSchema = createInsertSchema(guidelines).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertIntervention = z.infer<typeof insertInterventionSchema>;
export type Intervention = typeof interventions.$inferSelect;

export type InsertGuideline = z.infer<typeof insertGuidelineSchema>;
export type Guideline = typeof guidelines.$inferSelect;
