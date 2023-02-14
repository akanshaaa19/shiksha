function ConnectingBorder() {
  return (
    <div className="flex items-start flex-row">
      <div className="border-t-4 border-r-4 border-transparent">
        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full" />
      </div>
      <div className="border-t-4 border-transparent flex-auto">
        <div className="h-16 border-b-4 border-gray-300 border-dashed" />
      </div>
      <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full" />
    </div>
  );
}

export default ConnectingBorder;
