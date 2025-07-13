import Aurora from '@/components/backgrounds/Aurora';

export function HomePageBackground() {
  return (
    <div className="fixed inset-0 -z-2">
      <Aurora colorStops={['#0F4C3A', '#2ECC71', '#7CFF67']} blend={0.5} amplitude={0.3} speed={0.5} />
    </div>
  );
}
