
const db = require("../config/db");

exports.getReviews = (req,res)=>{
    db.query("SELECT * FROM Product_Review ORDER BY created_at DESC",(err,result)=>{
        if(err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.addReview = (req,res)=>{
    const {product_id,user_id,username,rating,review_text,status} = req.body;
    db.query(
        "INSERT INTO Product_Review (product_id,user_id,username,rating,review_text,status) VALUES (?,?,?,?,?,?)",
        [product_id,user_id,username,rating,review_text,status || "Visible"],
        (err,result)=>{
            if(err) return res.status(500).json(err);
            res.json({message:"Review added"});
        }
    );
};

exports.deleteReview = (req,res)=>{
    db.query("DELETE FROM Product_Review WHERE review_id=?",[req.params.id],(err)=>{
        if(err) return res.status(500).json(err);
        res.json({message:"Deleted"});
    });
};
