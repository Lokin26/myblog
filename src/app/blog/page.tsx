import { Card, CardContent } from '@/components/ui/card';

export default function BlogPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog Posts</h1>
          {/* Add blog posts here */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  
                  Coming soon..
                </h2>
                </CardContent>
            </Card>

        </div>
      </div>
    );
  }