import { teams } from '../../data/teams'
import { Linkedin, Twitter, UserCircle } from 'lucide-react'

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-white to-light-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            The People Behind DigiSphere
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-gray-600">
            Dedicated professionals committed to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teams.map((member) => (
            <div
              key={member.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 border border-gray-200 text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                <UserCircle className="w-16 h-16 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-gray-500 mb-4">{member.position}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection 