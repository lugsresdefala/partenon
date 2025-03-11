import { Button } from "@/components/ui/button";

export default function Consultation() {
  return (
    <section className="mb-12">
      <div className="bg-primary-50 rounded-lg p-6 md:p-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold text-secondary-800 mb-2">
              Need Personalized Guidance?
            </h3>
            <p className="text-secondary-600 mb-4">
              Remember that these recommendations are general guidelines. Always
              consult with a healthcare professional for personalized advice
              based on your specific situation.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end mt-4 md:mt-0">
            <Button>Find a Specialist</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
