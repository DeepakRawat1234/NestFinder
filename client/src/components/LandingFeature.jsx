const LandingFeatures = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8 text-center">
        
        <h2 className="text-3xl font-bold mb-10">Why NestFinder?</h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div>
            <h3 className="text-xl font-bold">Verification</h3>
            <p className="text-gray-500 mt-3">
              Every property is verified for safety.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Matching</h3>
            <p className="text-gray-500 mt-3">
              AI-based roommate matching system.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Transparency</h3>
            <p className="text-gray-500 mt-3">
              No hidden charges.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;