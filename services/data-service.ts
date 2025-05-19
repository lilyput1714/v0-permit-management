// Mock data service for the permit management system
// In a real application, this would connect to a backend API

import { Flame, Snowflake, ArrowUp, Zap } from "lucide-react"
import type {
  Permit,
  Observation,
  Incident,
  Action,
  Audit,
  HIRA,
  LibraryItem,
  Contractor,
  DashboardStats,
} from "@/types"

// Mock permits data
const permitsMockData: Permit[] = [
  {
    id: 1,
    title: "Hot Work - Welding",
    type: "HWP",
    location: "Building C, Area 2",
    requestedBy: "Robert Johnson",
    startDate: "2025-05-18",
    endDate: "2025-05-19",
    status: "Approved",
    icon: Flame,
    description: "Welding work to repair structural supports in Building C, Area 2.",
    date: "2025-05-16",
    priority: "High",
    permitNumber: "HWP-2025-1001",
  },
  {
    id: 2,
    title: "Electrical Maintenance",
    type: "EWP",
    location: "Substation B",
    requestedBy: "Lisa Chen",
    startDate: "2025-05-20",
    endDate: "2025-05-20",
    status: "Pending Approval",
    icon: Zap,
    description: "Routine maintenance of electrical panels in Substation B.",
    date: "2025-05-19",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Cold Work - Pipe Repair",
    type: "CWP",
    location: "Cooling Tower",
    requestedBy: "Mark Wilson",
    startDate: "2025-05-17",
    endDate: "2025-05-18",
    status: "In Progress",
    icon: Snowflake,
    description: "Repair of water pipes in the cooling tower system.",
    date: "2025-05-17",
    priority: "Medium",
    permitNumber: "CWP-2025-1003",
  },
  {
    id: 4,
    title: "Working at Height",
    type: "WHP",
    location: "Roof Maintenance",
    requestedBy: "Sarah Adams",
    startDate: "2025-05-21",
    endDate: "2025-05-22",
    status: "Pending Approval",
    icon: ArrowUp,
    description: "Inspection and repair of roof drainage system.",
    date: "2025-05-20",
    priority: "High",
  },
]

// Mock observations data
const observationsMockData: Observation[] = [
  {
    id: 1,
    title: "Spill in Production Area",
    location: "Production Line A",
    reportedBy: "John Smith",
    date: "2025-05-18",
    status: "Open",
    observationType: "Unsafe",
    category: "Housekeeping",
    severity: "Medium",
    description: "Oil spill near machine #3 creating a slip hazard.",
  },
  {
    id: 2,
    title: "Proper PPE Usage",
    location: "Welding Shop",
    reportedBy: "Maria Garcia",
    date: "2025-05-17",
    status: "Closed",
    observationType: "Safe",
    category: "PPE",
    severity: "Low",
    description: "All welders observed using proper eye and face protection.",
  },
  {
    id: 3,
    title: "Near Miss - Falling Object",
    location: "Warehouse",
    reportedBy: "David Lee",
    date: "2025-05-16",
    status: "In Progress",
    observationType: "Near Miss",
    category: "Material Handling",
    severity: "High",
    description: "Box nearly fell from top shelf when forklift bumped into racking.",
  },
  {
    id: 4,
    title: "Blocked Emergency Exit",
    location: "Office Building",
    reportedBy: "Sarah Johnson",
    date: "2025-05-15",
    status: "Open",
    observationType: "Unsafe",
    category: "Emergency Preparedness",
    severity: "Critical",
    description: "Emergency exit blocked by temporary storage of office furniture.",
  },
]

// Mock incidents data
const incidentsMockData: Incident[] = [
  {
    id: 1,
    title: "Forklift Collision",
    location: "Warehouse",
    reportedBy: "Michael Brown",
    date: "2025-05-15",
    status: "Under Investigation",
    incidentType: "Property Damage",
    severity: "Medium",
    description: "Forklift collided with racking, causing minor damage to both.",
    rootCause: "Operator Error",
  },
  {
    id: 2,
    title: "Chemical Spill",
    location: "Laboratory",
    reportedBy: "Jennifer Wilson",
    date: "2025-05-14",
    status: "Closed",
    incidentType: "Environmental",
    severity: "High",
    description: "5L of solvent spilled during transfer operation. Contained with spill kit.",
    rootCause: "Procedural Non-compliance",
  },
  {
    id: 3,
    title: "Minor Burn Injury",
    location: "Kitchen",
    reportedBy: "Robert Davis",
    date: "2025-05-13",
    status: "Action Required",
    incidentType: "First Aid",
    severity: "Low",
    description: "Employee received minor burn from hot water. First aid administered.",
  },
  {
    id: 4,
    title: "Slip and Fall",
    location: "Entrance Lobby",
    reportedBy: "Emily Chen",
    date: "2025-05-12",
    status: "Under Investigation",
    incidentType: "Medical Treatment",
    severity: "Medium",
    description: "Visitor slipped on wet floor and fell. Transported to clinic for evaluation.",
  },
]

// Mock actions data
const actionsMockData: Action[] = [
  {
    id: 1,
    title: "Update Emergency Response Plan",
    assignedTo: "Sarah Johnson",
    dueDate: "2025-06-15",
    date: "2025-05-15",
    status: "In Progress",
    category: "Emergency Preparedness",
    priority: "High",
    description: "Review and update emergency response procedures for chemical spills.",
    source: "Incident #2",
  },
  {
    id: 2,
    title: "Forklift Safety Training",
    assignedTo: "Michael Brown",
    dueDate: "2025-05-30",
    date: "2025-05-16",
    status: "Overdue",
    category: "Training",
    priority: "Medium",
    description: "Conduct refresher training for all forklift operators.",
    source: "Incident #1",
  },
  {
    id: 3,
    title: "Install Anti-Slip Mats",
    assignedTo: "David Lee",
    dueDate: "2025-05-25",
    date: "2025-05-13",
    status: "Completed",
    category: "Facility Improvement",
    priority: "Medium",
    description: "Install anti-slip mats at all building entrances.",
    source: "Incident #4",
  },
  {
    id: 4,
    title: "Conduct Risk Assessment",
    assignedTo: "Jennifer Wilson",
    dueDate: "2025-06-10",
    date: "2025-05-17",
    status: "In Progress",
    category: "Risk Management",
    priority: "High",
    description: "Perform risk assessment for chemical handling procedures in the laboratory.",
    source: "Audit #2",
  },
  {
    id: 5,
    title: "Repair Warehouse Racking",
    assignedTo: "Robert Davis",
    dueDate: "2025-05-22",
    date: "2025-05-15",
    status: "In Progress",
    category: "Maintenance",
    priority: "Low",
    description: "Repair damaged racking in warehouse section B.",
    source: "Incident #1",
  },
]

// Mock audits data
const auditsMockData: Audit[] = [
  {
    id: 1,
    title: "Monthly Safety Inspection",
    auditType: "Safety Inspection",
    location: "Production Area",
    auditor: "John Smith",
    date: "2025-05-10",
    status: "Completed",
    score: 92,
    description:
      "Monthly safety inspection of production area including machine guarding, PPE usage, and housekeeping.",
    nextAuditDate: "2025-06-10",
  },
  {
    id: 2,
    title: "Chemical Storage Audit",
    auditType: "Compliance",
    location: "Chemical Storage Room",
    auditor: "Jennifer Wilson",
    date: "2025-05-05",
    status: "Completed",
    score: 78,
    description: "Audit of chemical storage practices, labeling, and SDS availability.",
    nextAuditDate: "2025-08-05",
  },
  {
    id: 3,
    title: "Fire Safety Inspection",
    auditType: "Fire Safety",
    location: "Entire Facility",
    auditor: "David Lee",
    date: "2025-04-28",
    status: "Completed",
    score: 85,
    description: "Inspection of fire extinguishers, emergency exits, and evacuation routes.",
    nextAuditDate: "2025-07-28",
  },
  {
    id: 4,
    title: "Contractor Safety Audit",
    auditType: "Contractor",
    location: "Construction Site",
    auditor: "Sarah Johnson",
    date: "2025-05-20",
    status: "Scheduled",
    description: "Audit of contractor safety practices, documentation, and compliance with site rules.",
  },
]

// Mock HIRA data
const hiraMockData: HIRA[] = [
  {
    id: 1,
    title: "Chemical Handling Risk Assessment",
    location: "Laboratory",
    hazardType: "Chemical",
    assessedBy: "Jennifer Wilson",
    date: "2025-04-15",
    status: "Approved",
    riskLevel: "High",
    description: "Risk assessment for handling and storage of corrosive chemicals in the laboratory.",
    controlMeasures: ["PPE Requirements", "Ventilation", "Training", "Emergency Shower"],
    reviewDate: "2025-10-15",
  },
  {
    id: 2,
    title: "Working at Height Assessment",
    location: "Maintenance",
    hazardType: "Fall",
    assessedBy: "Robert Davis",
    date: "2025-05-01",
    status: "Approved",
    riskLevel: "High",
    description: "Risk assessment for maintenance activities requiring working at heights.",
    controlMeasures: ["Fall Protection", "Training", "Inspection", "Permit System"],
    reviewDate: "2025-11-01",
  },
  {
    id: 3,
    title: "Machine Guarding Assessment",
    location: "Production Line A",
    hazardType: "Mechanical",
    assessedBy: "Michael Brown",
    date: "2025-05-10",
    status: "In Review",
    riskLevel: "Medium",
    description: "Assessment of machine guarding adequacy on production line equipment.",
    controlMeasures: ["Guards", "Emergency Stops", "Training", "Lockout/Tagout"],
    reviewDate: "2025-11-10",
  },
  {
    id: 4,
    title: "Manual Handling Assessment",
    location: "Warehouse",
    hazardType: "Ergonomic",
    assessedBy: "Sarah Johnson",
    date: "2025-05-12",
    status: "Draft",
    riskLevel: "Medium",
    description: "Assessment of manual handling tasks in the warehouse.",
    controlMeasures: ["Mechanical Aids", "Training", "Job Rotation"],
    reviewDate: "2025-11-12",
  },
]

// Mock library items data
const libraryItemsMockData: LibraryItem[] = [
  {
    id: 1,
    title: "Emergency Response Plan",
    type: "Document",
    category: "Emergency",
    author: "Safety Department",
    version: "2.3",
    date: "2025-01-15",
    status: "Active",
    description: "Comprehensive emergency response procedures for the facility.",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "Hot Work Permit Procedure",
    type: "Procedure",
    category: "Permits",
    author: "John Smith",
    version: "1.5",
    date: "2025-02-20",
    status: "Active",
    description: "Procedure for issuing and managing hot work permits.",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "Incident Report Form",
    type: "Form",
    category: "Incidents",
    author: "Safety Department",
    version: "3.0",
    date: "2025-03-10",
    status: "Active",
    description: "Form for reporting safety incidents and near misses.",
    fileUrl: "#",
  },
  {
    id: 4,
    title: "Hazard Communication Training",
    type: "Training",
    category: "Training",
    author: "Jennifer Wilson",
    version: "2.1",
    date: "2025-04-05",
    status: "Active",
    description: "Training materials for hazard communication program.",
    fileUrl: "#",
  },
  {
    id: 5,
    title: "Lockout/Tagout Procedure",
    type: "Procedure",
    category: "Energy Control",
    author: "Michael Brown",
    version: "1.2",
    date: "2025-03-25",
    status: "Active",
    description: "Procedure for controlling hazardous energy during maintenance.",
    fileUrl: "#",
  },
  {
    id: 6,
    title: "Safety Observation Form",
    type: "Form",
    category: "Observations",
    author: "Safety Department",
    version: "1.0",
    date: "2025-05-01",
    status: "Active",
    description: "Form for documenting safety observations in the workplace.",
    fileUrl: "#",
  },
]

// Mock contractors data
const contractorsMockData: Contractor[] = [
  {
    id: 1,
    companyName: "ABC Electrical Services",
    contactName: "John Anderson",
    email: "john@abcelectrical.com",
    phone: "555-123-4567",
    trades: ["Electrical", "Instrumentation"],
    status: "Active",
    expiryDate: "2025-12-31",
    insuranceStatus: "Valid",
  },
  {
    id: 2,
    companyName: "XYZ Mechanical Contractors",
    contactName: "Sarah Williams",
    email: "sarah@xyzmech.com",
    phone: "555-987-6543",
    trades: ["Mechanical", "Plumbing", "HVAC"],
    status: "Active",
    expiryDate: "2025-10-15",
    insuranceStatus: "Valid",
  },
  {
    id: 3,
    companyName: "Reliable Construction Inc.",
    contactName: "Michael Johnson",
    email: "michael@reliableconstruction.com",
    phone: "555-456-7890",
    trades: ["Construction", "Carpentry", "Concrete"],
    status: "Inactive",
    expiryDate: "2025-03-31",
    insuranceStatus: "Expired",
  },
  {
    id: 4,
    companyName: "Safety First Consultants",
    contactName: "Emily Chen",
    email: "emily@safetyfirst.com",
    phone: "555-789-0123",
    trades: ["Safety Consulting", "Training"],
    status: "Active",
    expiryDate: "2026-01-15",
    insuranceStatus: "Valid",
  },
  {
    id: 5,
    companyName: "Precision Welding LLC",
    contactName: "Robert Martinez",
    email: "robert@precisionwelding.com",
    phone: "555-234-5678",
    trades: ["Welding", "Fabrication"],
    status: "Pending Approval",
    expiryDate: "2025-06-30",
    insuranceStatus: "Pending",
  },
]

// Mock user data
const currentUser = {
  id: 5,
  name: "Current User",
  email: "user@safetymint.com",
  role: "Safety Manager",
  initials: "CU",
  department: "Safety",
}

// Mock notification data
let unreadNotificationsCount = 2

const notificationsMockData = [
  {
    id: 1,
    title: "New Permit Request",
    message: "Robert Johnson has submitted a new Hot Work Permit for approval",
    timestamp: "2025-05-18 09:30",
    type: "info",
    isRead: false,
    link: "/permits/1",
    icon: undefined,
  },
  {
    id: 2,
    title: "Incident Reported",
    message: "A new incident has been reported in Production Line A",
    timestamp: "2025-05-16 14:45",
    type: "warning",
    isRead: false,
    link: "/incidents/1",
    icon: undefined,
  },
]

// Mock dashboard stats
const dashboardStatsMockData: DashboardStats = {
  openPermits: 3,
  activeIncidents: 2,
  overdueActions: 1,
  safetyScore: 87,
}

// Service functions
export const getAllPermits = () => permitsMockData
export const getPermitById = (id: number) => permitsMockData.find((permit) => permit.id === id)
export const updatePermitStatus = (id: number, status: string) => {
  const permit = permitsMockData.find((p) => p.id === id)
  if (permit) {
    permit.status = status
    return true
  }
  return false
}

export const getAllObservations = () => observationsMockData
export const getObservationById = (id: number) => observationsMockData.find((observation) => observation.id === id)

export const getAllIncidents = () => incidentsMockData
export const getIncidentById = (id: number) => incidentsMockData.find((incident) => incident.id === id)

export const getAllActions = () => actionsMockData
export const getActionById = (id: number) => actionsMockData.find((action) => action.id === id)

export const getAllAudits = () => auditsMockData
export const getAuditById = (id: number) => auditsMockData.find((audit) => audit.id === id)

export const getAllHIRAs = () => hiraMockData
export const getHIRAById = (id: number) => hiraMockData.find((hira) => hira.id === id)

export const getAllLibraryItems = () => libraryItemsMockData
export const getLibraryItemById = (id: number) => libraryItemsMockData.find((item) => item.id === id)

export const getAllContractors = () => contractorsMockData
export const getContractorById = (id: number) => contractorsMockData.find((contractor) => contractor.id === id)

export const getCurrentUser = () => currentUser
export const getUnreadNotificationsCount = () => unreadNotificationsCount
export const markNotificationAsRead = (id: number) => {
  if (unreadNotificationsCount > 0) {
    unreadNotificationsCount--
  }
}
export const markAllNotificationsAsRead = () => {
  unreadNotificationsCount = 0
}

export const getAllNotifications = () => notificationsMockData
export const getDashboardStats = () => dashboardStatsMockData
