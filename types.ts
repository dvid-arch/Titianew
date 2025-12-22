
export enum ToolType {
  FIGMA = 'FIGMA',
  BLENDER = 'BLENDER',
  C_PROG = 'C_PROG',
  CRYPTO = 'CRYPTO'
}

export interface ToolConfig {
  id: ToolType;
  name: string;
  icon: string;
  description: string;
  primaryColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface TutorialStep {
  id: string;
  title: string;
  instruction: string;
  highlightId?: string; // ID of the UI element to highlight in the mock
  actionDescription?: string;
}
