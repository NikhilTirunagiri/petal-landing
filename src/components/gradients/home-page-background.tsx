import Lightning from '@/components/backgrounds/Lightning';

export function HomePageBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Lightning 
        hue={159} 
        xOffset={-0.95} 
        speed={0.5} 
        intensity={0.5} 
        size={1.2} 
      />
    </div>
  );
}
