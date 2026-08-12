import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr Balasubrmanian Chelliah",
    role: "Head of Department (CSE)",
    avatar: "hod.jpg",
    linkedin: "",
    github: "",
    mail: "rc.balasubramanian@psr.edu.in",
  },
  {
    name: "Dr Ramathilagam Arunagiri",
    role: "Professor & COE",
    avatar: "ramathilgam.jpg",
    linkedin: "",
    github: "",
    mail: "ramathilagam@psr.edu.in",
  },
  {
    name: "Dr Palanikumar Rajendran",
    role: "Associate Professor (CSE)",
    avatar: "ahod.jpg",
    linkedin: "",
    github: "",
    mail: "palanikumar@psr.edu.in",
  },
  {
    name: "Dr Priyadarsini Seenivasan",
    role: "Professor",
    avatar: "priyadharsini.jpg",
    linkedin: "",
    github: "",
    mail: "priyadarsini@psr.edu.in",
  },

  {
    name: "Abishek Muthaiah S.K",
    role: "Event Coordinator",
    avatar:
      "22.jpg",
    linkedin: "",
    github: "",
    mail: "abishekmuthaiahsk@gmail.com",
  },

  {
    name: "Sathees Kumar P",
    role: "Event Coordinator",
    avatar: "1000358877.jpg",
    linkedin: "",
    github: "",
    mail: "Satheeskumarp1214@gmail.com",
  },

];

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-[#070814]">
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
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:-translate-y-2 transition duration-300 group overflow-hidden flex flex-col items-center justify-between"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center">
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
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition text-center">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-400 mb-4 text-center">{member.role}</p>

                {/* Social Icons & Mail */}
                <div className="flex flex-col items-center gap-2 mt-auto w-full">
                  {member.mail && (
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.mail)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-3.5 py-2 rounded-xl transition duration-200 group/mail cursor-pointer max-w-full hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      title={`Send email to ${member.mail}`}
                    >
                      <Mail size={14} className="shrink-0 text-cyan-400 group-hover/mail:scale-110 transition" />
                      <span className="truncate">{member.mail}</span>
                    </a>
                  )}

                  <div className="flex justify-center gap-4 mt-1">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;