 {/* Centered Quote Form Card */}
          <div className="max-w-6xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 text-[#00284A] w-full">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-6 leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's Get You Moving - Get Your Free Quote in <span className="text-[#0162B3]">3 Quick Steps!</span>
            </h2>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  {/* Step 1: Move Details */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                    <select
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none bg-white text-base"
                      value={formData.moveSize}
                      onChange={(e) => setFormData({ ...formData, moveSize: e.target.value })}
                      required
                    >
                      <option value="">Move size</option>
                      <option value="Studio">Studio</option>
                      <option value="1 Bedroom">1 Bedroom</option>
                      <option value="2 Bedroom">2 Bedroom</option>
                      <option value="3 Bedroom">3 Bedroom</option>
                      <option value="4+ Bedroom">4+ Bedroom</option>
                      <option value="Office">Office</option>
                    </select>

                    <select
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none bg-white text-base"
                      value={formData.moveFrom}
                      onChange={(e) => setFormData({ ...formData, moveFrom: e.target.value })}
                      required
                    >
                      <option value="">Move From</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Storage">Storage</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Origin Zip Code"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.originZip}
                      onChange={(e) => setFormData({ ...formData, originZip: e.target.value })}
                      required
                    />

                    <input
                      type="text"
                      placeholder="Destination Zip Code"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.destinationZip}
                      onChange={(e) => setFormData({ ...formData, destinationZip: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex justify-center mb-4 md:mb-6">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#0162B3] text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-3 w-full md:w-auto justify-center border-4 border-white shadow-lg"
                    >
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Step 2: Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />

                    <input
                      type="tel"
                      placeholder="(201) 555-0123"
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 justify-center mb-4 md:mb-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-[#00284A] text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-3 w-full md:w-auto justify-center border-3 border-white shadow-lg order-2 md:order-1"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gray-400 text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-gray-500 transition flex items-center gap-3 w-full md:w-auto justify-center shadow-lg order-1 md:order-2"
                    >
                      Get Quote
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}

            </form>

            {/* Review Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200">
              {/* Google Reviews */}
              <div className="flex flex-col items-center">
                <img src={googleReviews} alt="Google Reviews" className="h-16 md:h-20 w-auto mb-2" />
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-[#FDB915] fill-[#FDB915]" />
                  ))}
                </div>
                
                <p className="text-xs text-gray-500">Average 4.9 Stars</p>
              </div>

              {/* BBB */}
              <div className="flex flex-col items-center">
                <img src={bbbLogo} alt="BBB Accredited Business" className="h-16 md:h-20 w-auto mb-2" />
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-[#FDB915] fill-[#FDB915]" />
                  ))}
                </div>
                
                <p className="text-xs text-gray-500">Average 4.8 Stars</p>
              </div>

              {/* HomeAdvisor */}
              <div className="flex flex-col items-center">
                <img src={homeAdvisor} alt="HomeAdvisor" className="h-16 md:h-20 w-auto mb-2" />
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-[#FDB915] fill-[#FDB915]" />
                  ))}
                </div>
                
                <p className="text-xs text-gray-500">Average 4.8 Stars</p>
              </div>
            </div>
          </div>
        </div>
          </section>
        </div>
      </div>