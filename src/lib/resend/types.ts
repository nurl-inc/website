export interface ResendEmailBody {
  from: string;
  to: string[];
  subject: string;
  html: string;
}
