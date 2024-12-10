export interface ResendEmailBody {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export interface AudienceContact {
  email: string;
  firstName?: string;
  lastName?: string;
  unsubscribed: boolean;
}
