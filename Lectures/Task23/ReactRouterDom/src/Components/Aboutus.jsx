import { useLoaderData } from "react-router-dom";

function Aboutus() {
  const profile = useLoaderData();

  return (
    <div className="relative z-[1] flex flex-col lg:flex-row w-full min-h-screen bg-transparent text-gray-200 px-4 sm:px-6 lg:px-8 py-8 gap-8">

      {/* Left Main Container */}
      <div className="w-full lg:w-[40%] flex flex-col gap-5">

        {/* Purpose */}
        <div className="border-2 border-gray-300 rounded-md p-4 sm:p-6 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Purpose</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            This project demonstrates the use of useLoaderData() to fetch the data directly from apis. Hence the sample is present in Home page and also on the right side of this box demonstrating my github profile. The About us page has a loader that fetches the data from the github api and then by the help of useLoaderData() the data is correctly used in the respective tags within the JSX.
          </p>
        </div>

        {/* Focusing On */}
        <div className="border-2 border-gray-300 rounded-md p-4 sm:p-6 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Focusing On</h2>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed space-y-2">
            <li>Full-stack web development using MERN stack</li>
            <li>UI/UX design with focus on accessibility</li>
            <li>Mobile app prototyping and testing</li>
            <li>Cloud deployment & DevOps integration</li>
          </ul>
        </div>
      </div>

      {/* Right Container - Profile & Contact */}
      <div className="flex-1 lg:flex-1 flex flex-col gap-8">

        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <img
            src={profile.avatar_url}
            alt="Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{profile.name}</h1>
            <p className="text-sm sm:text-base max-w-lg">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 border-2 border-gray-300 py-7 px-6 rounded-md text-lg sm:text-xl max-w-full sm:max-w-lg">
          <ContactItem
            icon={
              <i className="fa-solid fa-lg fa-phone"></i>
            }
            label="+91 99448-89903"
          />
          <ContactItem
            icon={
              <i className="fa-solid fa-lg fa-envelope"></i>
            }
            label="amareshsahoo950@email.com"
          />
          <ContactItem
            icon={
              <i className="fa-solid fa-lg fa-location-dot"></i>
            }
            label={profile.location}
          />
        </div>
      </div>
    </div>
  );
}

/* Contact Item Component */
const ContactItem = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0">{icon}</div>
    <span>{label}</span>
  </div>
);

export default Aboutus;


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/AmareshSahoo950');
  if (!response.ok) {
    throw new Response("Failed to fetch profile", { status: response.status });
  }
  return await response.json()
};

