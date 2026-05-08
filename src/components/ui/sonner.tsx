import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-violet-400 mb-4">
            Get in touch
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let&apos;s build something together
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have an idea, a project, or just want to say hi?
            Drop me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#0b1023] p-8">
            <h3 className="text-3xl font-bold mb-3">
              Connect with me
            </h3>

            <p className="text-zinc-400 mb-8">
              Find me on these platforms.
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Github />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    GitHub
                  </p>

                  <p className="font-semibold">
                    @yourusername
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Linkedin />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    LinkedIn
                  </p>

                  <p className="font-semibold">
                    /yourhandle
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Instagram />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Instagram
                  </p>

                  <p className="font-semibold">
                    @yourhandle
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="lg:col-span-3 rounded-3xl border border-white/10 bg-[#0b1023] p-8 space-y-5"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="9f1a9965-4c0f-425f-bc2f-38a88ac4f943"
            />

            {/* Redirect after submit */}
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            {/* Subject */}
            <input
              type="hidden"
              name="subject"
              value="Portfolio Contact"
            />

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm text-zinc-300">
                Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <User className="w-5 h-5 text-zinc-400" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <Mail className="w-5 h-5 text-zinc-400" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Mobile Number
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <Phone className="w-5 h-5 text-zinc-400" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-zinc-300">
                Message
              </label>

              <div className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <MessageSquare className="w-5 h-5 text-zinc-400 mt-1" />

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-2xl bg-violet-500 hover:bg-violet-600 transition text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Loader2 className="animate-spin w-5 h-5" />
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}