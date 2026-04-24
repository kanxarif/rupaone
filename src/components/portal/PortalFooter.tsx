const PortalFooter = () => {
  return (
    <footer id="bantuan" className="border-t border-border/60 bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} RupaOne Super Portal. Semua hak dilindungi.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground">Kebijakan Privasi</a>
          <a href="#" className="hover:text-foreground">Syarat Layanan</a>
          <a href="#" className="hover:text-foreground">Bantuan</a>
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
