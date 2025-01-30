import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, LogIn, X } from 'lucide-react';
import { tools, categories } from './data/tools';
import { Tool } from './types';

interface ModalProps {
  tool: Tool;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ tool, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                {tool.icon}
              </div>
              <h2 className="ml-3 text-2xl font-bold text-gray-900">{tool.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Category</h3>
              <p className="text-gray-600">{tool.category}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {tool.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Use Case</h3>
              <p className="text-gray-600">{tool.industryUseCase}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration</h3>
              <div className="flex flex-wrap gap-2">
                {tool.integration.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Licensing: {tool.licensing}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('newest');
  const [showCategories, setShowCategories] = useState(true);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const allTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => tool.tags.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold">PetroTech</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Collection</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Category</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Tags</a>
            </nav>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            The Best <span className="text-blue-600">Petroleum Engineering</span> Tools
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive directory of professional petroleum engineering software
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search any tools you need..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Categories Toggle */}
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        >
          {showCategories ? (
            <ChevronUp className="h-4 w-4 mr-2" />
          ) : (
            <ChevronDown className="h-4 w-4 mr-2" />
          )}
          Categories
        </button>

        {/* Categories Grid */}
        {showCategories && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
                className={`flex items-center p-4 rounded-lg border ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  selectedCategory === category.id ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  {category.icon}
                </div>
                <span className="ml-3 text-sm font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedTags([...selectedTags, e.target.value])}
            >
              <option value="">Select tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Sort by Time (desc)</option>
              <option value="oldest">Sort by Time (asc)</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          {(selectedTags.length > 0 || selectedCategory) && (
            <button
              onClick={() => {
                setSelectedTags([]);
                setSelectedCategory('');
              }}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedTool(tool)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {tool.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{tool.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{tool.description}</p>

                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {tool.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{tool.licensing}</span>
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTool && (
        <Modal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}

export default App;