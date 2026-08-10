import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr Balasubrmanian Chelliah",
    role: "Head of Department (CSE)",
    avatar: "hod.jpg",
    linkedin: "",
    github: "",
    mail: "hod.cse@ryvonexa.in",
  },
  {
    name: "Dr Ramathilagam Arunagiri",
    role: "Professor & COE",
    avatar: "coe.jpg",
    linkedin: "",
    github: "",
    mail: "samyuktha@ryvonexa.in",
  },
  {
    name: "Dr Palanikumar Rajendran",
    role: "Associate Professor (CSE)",
    avatar: "ahod.jpg",
    linkedin: "",
    github: "",
    mail: "vidyut@ryvonexa.in",
  },
  {
    name: "Dr Priyadarsini Seenivasan",
    role: "Professor",
    avatar: "priyadharsini.jpg",
    linkedin: "",
    github: "",
    mail: "meenakshi@ryvonexa.in",
  },
  {
    name: "Ranjith S",
    role: "Event Coordinator",
    avatar: "ranjith.jpg",
    linkedin: "",
    github: "",
    mail: "aditya@ryvonexa.in",
  },
  {
    name: "Akash K",
    role: "Event Coordinator",
    avatar:
      "22.jpg",
    linkedin: "",
    github: "",
    mail: "kavya@ryvonexa.in",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 bg-[#070814]">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <p className="text-cyan-400 font-mono mb-2">
          Organizers & Visionaries
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Meet The Symposium Team
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          The passionate faculty convenors and student coordinators orchestrating RYVONEXA '26.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:-translate-y-2 transition duration-300 group overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-lg">
                  <img
                    src={member.avatar.startsWith('/') || member.avatar.startsWith('http') ? member.avatar : `/${member.avatar}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full bg-[#11110e]"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=User";
                    }}
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-400 mb-4">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <Linkedin size={18} />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <Github size={18} />
                  </a>
                )}

                {member.mail && (
                  <a
                    href={`mailto:${member.mail}`}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;