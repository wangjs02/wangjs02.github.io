export function AcademicService() {
  return (
    <section id="service" className="mb-16">
      <h2 className="mb-6">Academic Service / Teaching</h2>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2"><strong>Reviewer</strong></p>
          <p className="text-gray-700">
            MobiSys '23, ATC '23, OSDI '23, Ubicomp '24 Nov, Ubicomp '25 Feb, 
            Ubicomp '25 May, TIOT, JSAS, CHI '26
          </p>
        </div>

        <div>
          <p className="mb-2"><strong>PC Member</strong></p>
          <p className="text-gray-700">ICPADS '24, ICPADS '25</p>
        </div>

        <div>
          <p className="mb-2"><strong>TA</strong></p>
          <div className="text-gray-700 space-y-1">
            <p>COMP1117 (Computer Programming, '23 Fall)</p>
            <p>COMP7310 (Artificial Intelligence of Things, '25 Spring)</p>
            <p>COMP3230 (Principles of Operating Systems, '25 Fall)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
