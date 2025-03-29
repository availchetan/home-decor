"use client";

export function PartnersSection() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Over 200 leading brands choose PoojaviCraft
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the companies that trust us for their craft needs and corporate gifting solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* These are placeholder divs that would be replaced with actual partner logos */}
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 1
          </div>
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 2
          </div>
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 3
          </div>
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 4
          </div>
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 5
          </div>
          <div className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">
            Partner 6
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-orange-500 font-medium hover:underline">
            See all our partners
          </button>
        </div>
      </div>
    </section>
  );
}
