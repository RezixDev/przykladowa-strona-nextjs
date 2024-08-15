
export const Teaser = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4">
      <div className="md:w-1/2 mb-8 md:mb-0 relative w-full" style={{ height: '500px' }}>
        <img 
          src="/doggo.png" 
          alt="Teaser image" 
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Doggo Hehe</h2>
        <p className="text-gray-600">
          No Siema, Prosty Boilerplate prezentujący możliwości Next.jsa
        </p>
      </div>
    </div>
  )
}