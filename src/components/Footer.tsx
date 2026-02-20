export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-950 py-8">
      <p className="text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Valerio Cristofori. All rights reserved.
      </p>
    </footer>
  );
}
