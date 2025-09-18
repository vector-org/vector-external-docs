'use client'

export function VectorHomepage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Welcome to the VECTOR Documentation
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The
              {' '}
              <strong>VECTOR Docs</strong>
              {' '}
              are your official guide to everything VECTOR — from getting started as a player to publishing and integrating games as a developer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're here to install your first game or to ship your studio's next big title, you'll find clear step-by-step guides, technical details, and resources to help you succeed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="rounded-3xl p-8 bg-background-alt border border-border shadow-sm">
            <h2 className="text-3xl font-bold text-vector-teal mb-6">GAMERS</h2>
            <div className="space-y-4">
              <p className="text-foreground font-medium mb-6">
                New to VECTOR? Start here to learn how to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Create your account
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Buy and install games
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Manage your library and downloads
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Stay connected and troubleshoot issues
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-background-alt border border-border shadow-sm">
            <h2 className="text-3xl font-bold text-vector-teal mb-6">DEVELOPERS</h2>
            <div className="space-y-4">
              <p className="text-foreground font-medium mb-6">
                Ready to bring your game to VECTOR? Dive into:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Setting up your developer account
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Uploading and managing game builds
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Integrating with VECTOR APIs
                </li>
                <li className="flex items-start">
                  <span className="text-vector-teal mr-2">-</span>
                  Using plugins for Unity and Unreal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
