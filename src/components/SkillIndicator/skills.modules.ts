import { ISkillIndicatorProps } from "./skillIndicator";
export enum SkillIconType {
    Brand,
    Solid,
    Regular,
    Fabric,
    Image,
    Other
  }
  export enum SkillCategory {
    Front_End_Languages,
    Other_Programming_Language,
    Microsoft_Technologies,
    Tools,
    Other
  }

  export interface ISkillsProps extends ISkillIndicatorProps {
    iconType: SkillIconType,
    category: SkillCategory
  }