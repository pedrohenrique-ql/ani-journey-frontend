import AniJourneyClient from '@/clients/AniJourneyClient';
import { createContext } from '@/utils/react';

export interface APIContextValue {
  aniJourney: AniJourneyClient;
}

const APIContext = createContext<APIContextValue>('APIContext');

export default APIContext;
