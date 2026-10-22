import Link from 'next/link';
import Counter from '@/components/Counter';
import Card from '@/components/Card';
import CounterWithLog from '@/components/CounterWithLog';
import TickTimer from '@/components/TickTimer';
import GreetingForm from '@/components/GreetingsForm';


export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
      <Card>
      <Counter />
      </Card>
      <Card>
      <CounterWithLog />
      </Card>
      <Card>
      <TickTimer />
      </Card>
      <Card>
      <GreetingForm/>
      </Card>
    </main>
  );
} 