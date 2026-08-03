import { Check, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const iconRegistry = {
  download: Download,
  github: FaGithub,
  mail: Mail,
  linkedin: FaLinkedin,
  check: Check,
} as const;
