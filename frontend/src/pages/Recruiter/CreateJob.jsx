import InputField from '../../components/InputField/InputField';
import SelectField from '../../components/SelectField';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm';
import useJob from '../../hooks/useJob';
function CreateJob() {
  const { formData, handleChange } = useForm({
    title: '',
    requirements: '',
    salary: { minSalary: '', maxSalary: '' },
    jobType: '',
    experienceLevel: '',
    location: '',
    remoteType: '',
    deadline: '',
    description: '',
  });
  const { loading, error, postJob } = useJob();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await postJob(formData);
    } catch (err) {
      console.log(err.message || 'Login Failed');
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-200 grid place-items-center relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-240 bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-wrap justify-evenly items-baseline"
        >
          <h2 className="text-center font-sans text-4xl font-bold mb-10 basis-full">
            Post a New Job Opportunity
          </h2>
          <div className="flex flex-wrap gap-x-2 justify-start">
            <InputField
              className="basis-1/2"
              label="Job Title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="Job Title"
            ></InputField>
            <div className="basis-1/2">
              <label className="text-xl" htmlFor="minSalary">
                Salary (INR)
              </label>
              <div className="flex gap-2">
                <InputField
                  id="minSalary"
                  name="salary.minSalary"
                  type="number"
                  value={formData.salary.minSalary}
                  onChange={handleChange}
                  placeholder="Minimum Salary"
                  wrapperClassName="flex-1"
                ></InputField>
                <InputField
                  id="maxSalary"
                  name="salary.maxSalary"
                  value={formData.salary.maxSalary}
                  onChange={handleChange}
                  type="number"
                  placeholder="Maximum Salary"
                  wrapperClassName="flex-1"
                ></InputField>
              </div>
            </div>
            <SelectField
              className="basis-1/2"
              name="jobType"
              id="jobType"
              value={formData.jobType}
              onChange={handleChange}
              label="Job Type"
              options={[
                { label: 'Full-Time', value: 'full-time' },
                { label: 'Part-Time', value: 'part-time' },
                { label: 'Contract', value: 'contract' },
                { label: 'Internship', value: 'internship' },
              ]}
            ></SelectField>
            <SelectField
              className="bais-1/2"
              id="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              name="experienceLevel"
              label="Experience Level"
              options={[
                { label: 'Junior', value: 'junior' },
                { label: 'Mid', value: 'mid' },
                { label: 'Senior', value: 'senior' },
              ]}
            ></SelectField>
            <InputField
              className="basis-1/2"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              label="Location"
              placeholder="Location"
            ></InputField>
            <SelectField
              className="basis-1/2"
              id="remoteType"
              name="remoteType"
              value={formData.remoteType}
              onChange={handleChange}
              label="Remote Type"
              options={[
                { label: 'Onsite', value: 'onsite' },
                { label: 'Remote', value: 'remote' },
                { label: 'Hybrid', value: 'hybrid' },
              ]}
            ></SelectField>
            <InputField
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              label="Application Deadline"
              type="Date"
            ></InputField>
            <InputField
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              label="Requirements"
              type="text"
            ></InputField>
            <div className="basis-full">
              <label htmlFor="description" className="text-xl">
                Job Description
              </label>
              <textarea
                className="border w-full p-2"
                name="description"
                value={formData.description}
                onChange={handleChange}
                id="description"
                rows="4"
                placeholder="Enter job description"
              ></textarea>
            </div>
          </div>
          <Button
            text="Post Job"
            type="submit"
            className="bg-blue-500 text-xl shadow-lg cursor-pointer p-4 m-4 text-white rounded-4xl hover:bg-blue-700"
          ></Button>
        </form>
      </div>
    </>
  );
}

export default CreateJob;
