export default function loginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex items-center justify-center min-h-[1024px] bg-gray-200 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('/images/landing-page.png')`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: "cover", 
            width: "100vw", 
            height: "100vh" }}>
              {children}
        </div>
    )
  }