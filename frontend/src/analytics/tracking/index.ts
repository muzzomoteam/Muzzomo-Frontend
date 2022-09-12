import { EVENT_NAMES } from "../event-names";

export const trackPage = (properties?: any) => {
  // @ts-ignore
  window?.analytics?.page(properties);
};

export const trackContactInfoSubmission = (contactInfo: {
  insurance_type: string;
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
}): void => {
  // @ts-ignore
  window?.analytics?.track(EVENT_NAMES.CONFIRM_INSURANCE_SUBMIT, contactInfo);
};

export const trackInsuranceTypeSelected = (insuranceType: string): void => {
  // @ts-ignore
  window?.analytics?.track(EVENT_NAMES.SELECT_INSURANCE_TYPE, {
    insuranceType,
  });
};
