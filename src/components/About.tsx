import ScrollReveal from "./ScrollReveal";
import { profile } from "../data/profile";
import authorImg from "../assets/images/author.jpg";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-brown-50 to-blue-50 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto w-64 md:w-full md:max-w-xs">
            {/* Decorative offset border */}
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-brown-300" />
            <img
              src={authorImg}
              alt={profile.name}
              className="relative z-10 w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal direction="right" delay={0.15}>
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brown-500">
              About Me
            </h2>
            <h3 className="mb-6 text-3xl font-bold text-blue-950 md:text-4xl">
              {profile.name}
            </h3>
            <p className="mb-4 text-lg leading-relaxed font-light text-blue-800">
              {profile.bio}
            </p>
            <p className="text-sm text-brown-600">
              📍 {profile.location}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
