import { CheckCircle, X, AlertCircle } from 'lucide-react'

const Toast = ({ message, type = 'success', onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50'
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800'
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200'
  const Icon = type === 'success' ? CheckCircle : AlertCircle

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center p-4 ${bgColor} border ${borderColor} rounded-lg shadow-lg max-w-xs animate-slide-left`}>
      <Icon className={`w-5 h-5 ${textColor} mr-2`} />
      <p className={`text-sm ${textColor}`}>{message}</p>
      <button
        onClick={onClose}
        className={`ml-4 ${textColor} hover:opacity-70 transition-opacity`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Toast 