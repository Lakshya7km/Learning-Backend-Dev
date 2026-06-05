const getUser = (req,res)=>{
    res.send("All users")
}

module.exports= {
    getUser
}

// Controller
// ↓
// Handles HTTP concerns
// (req, res, status codes)

// Service
// ↓
// Handles business logic
// (validation, calculations,
// database operations,
// authentication, etc.)