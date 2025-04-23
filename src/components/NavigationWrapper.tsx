'use client';

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('./Navigation'), {
  loading: () => <div className="fixed top-0 w-full h-16 bg-white/20 backdrop-blur-[8px] z-50" />,
  ssr: false,
});

export default function NavigationWrapper() {
  return <Navigation />;
}
