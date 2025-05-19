import type { LucideIcon } from "lucide-react"

// Base model with common fields
export interface BaseModel {
  id: number
  title: string
  date: string
  status: string
  description?: string
}

// Permit model
export interface Permit extends BaseModel {
  type: string
  location: string
  requestedBy: string
  startDate: string
  endDate: string
  icon: LucideIcon
  approvedBy?: string
  priority?: "Low" | "Medium" | "High"
  permitNumber?: string
}

// Observation model
export interface Observation extends BaseModel {
  location: string
  reportedBy: string
  observationType: "Safe" | "Unsafe" | "Near Miss"
  category: string
  severity: "Critical" | "High" | "Medium" | "Low"
}

// Incident model
export interface Incident extends BaseModel {
  location: string
  reportedBy: string
  incidentType: string
  severity: "Critical" | "High" | "Medium" | "Low"
  rootCause?: string
}

// Action model
export interface Action extends BaseModel {
  assignedTo: string
  dueDate: string
  category: string
  priority: "High" | "Medium" | "Low"
  source?: string
}

// Audit model
export interface Audit extends BaseModel {
  auditType: string
  location: string
  auditor: string
  score?: number
  nextAuditDate?: string
}

// HIRA model (Hazard Identification & Risk Assessment)
export interface HIRA extends BaseModel {
  location: string
  hazardType: string
  assessedBy: string
  riskLevel: "High" | "Medium" | "Low"
  controlMeasures?: string[]
  reviewDate: string
}

// Library item model
export interface LibraryItem extends BaseModel {
  type: "Document" | "Procedure" | "Form" | "Training"
  category: string
  author: string
  version: string
  fileUrl: string
}

// Contractor model
export interface Contractor {
  id: number
  companyName: string
  contactName: string
  email: string
  phone: string
  trades: string[]
  status: "Active" | "Inactive" | "Pending Approval"
  expiryDate: string
  insuranceStatus?: "Valid" | "Expired" | "Pending"
}

// Notification model
export interface Notification {
  id: number
  title: string
  message: string
  timestamp: string
  type: "info" | "warning" | "success" | "error"
  isRead: boolean
  link?: string
  icon?: LucideIcon
}

// User model
export interface User {
  id: number
  name: string
  email: string
  role: string
  avatar?: string
  initials: string
  department?: string
}

// Dashboard stats model
export interface DashboardStats {
  openPermits: number
  activeIncidents: number
  overdueActions: number
  safetyScore: number
}
