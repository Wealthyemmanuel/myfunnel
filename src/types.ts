export type FunnelStep = 'optin' | 'story';

export interface SubscriberData {
  name: string;
  email: string;
  submittedAt?: string;
}

export const TARGET_URL = 'https://internetwealthtraining.selar.com/page/2k?affiliate=qd6e';
export const MAILERLITE_ACTION_URL = 'https://assets.mailerlite.com/jsonp/2779605/forms/203600769514997459/subscribe';
