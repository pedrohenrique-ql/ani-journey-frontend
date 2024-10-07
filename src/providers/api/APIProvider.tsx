'use client';

import { PropsWithChildren, useMemo } from 'react';

import AniJourneyClient from '@/clients/AniJourneyClient';

import APIContext, { APIContextValue } from './APIContext';

type Props = PropsWithChildren;

function APIProvider({ children }: Props) {
  const aniJourneyClient = useMemo(() => new AniJourneyClient(), []);

  const api = useMemo<APIContextValue>(
    () => ({
      aniJourney: aniJourneyClient,
    }),
    [aniJourneyClient],
  );

  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}

export default APIProvider;
