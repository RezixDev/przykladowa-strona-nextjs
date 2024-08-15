import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow bg-black-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">O Projekcie</h1>
          <p className="text-gray-600">
            No Siema Elo 5 2 0
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}