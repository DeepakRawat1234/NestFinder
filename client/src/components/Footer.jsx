import Icon from "./Icon";
import { FOOTER_LINKS } from "../data/constants";

const SOCIAL_ICONS = ["social_leaderboard", "alternate_email", "hub"];

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-indigo-100 pt-20 pb-10 border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Icon name="home_pin" className="text-3xl text-indigo-400" />
              <h2 className="text-xl font-extrabold tracking-tight text-white">NestFinder</h2>
            </div>
            <p className="text-sm text-indigo-200/60 leading-relaxed">
              Making co-living accessible and brokerage-free for students and professionals across India.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold mb-6">{heading}</h4>
              <ul className="space-y-4 text-sm text-indigo-200/70">
                {links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-indigo-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-indigo-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-indigo-200/40">© 2024 NestFinder Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((icon) => (
              <a key={icon} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-all">
                <Icon name={icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}