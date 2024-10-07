import { createContext } from 'react';

import AniJourneyClient from '@/clients/AniJourneyClient';

export interface APIContextValue {
  aniJourney: AniJourneyClient;
}

const APIContext = createContext<APIContextValue | undefined>(undefined);

export default APIContext;
