const Tour = require("./../model/tour_model");

exports.get_all_tours = async (req, res, next) => {
    try {
        //  HERE WE CREATE A SIMPLE QUERY

        const queryobj = { ...req.query };

        //  exclude these keywords bcz we write each of method differently
       
        const excludequery = ["page", "sort", "limit", "fields"];
        excludequery.forEach((el) => {
            delete queryobj[el];
        });

        // ADVANCED FILTERING THE RESULT

       
        let queryStr = JSON.stringify(queryobj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (ele) => {
            return `$${ele}`;
        });


        let query = Tour.find(JSON.parse(queryStr)); // this will return us a query object whi
        
        result = await query;

        // Sorting
        if (req.query.sort) {
            // query=query.sort(req.query.sort);
            sortBy = req.query.sort;
            sortBy = sortBy.split(',').join(' ');

            query.sort(sortBy);
        }
        else{
            query=query.sort('-dateOfCreation');
        }


        // Projection or field limit
        if(req.query.fields){
            let fieldLimits=req.query.fields.split(',').join(' ');
            query=query.select(fieldLimits);
        }
        else{
            query=query.select('name duration ratingsAverage maxGroupSize -_id');
        }


        // Pagination 
       const page=req.query.page*1 || 1;
       const limit=req.query.limit*1 || 3;
       const skip=(page-1)*limit;


       query.skip(skip).limit(limit);
       
       
       
       
       
       
       
       
       // if(req.query.page*1 || 1){
        //     const page=req.query.page;
        //     const limits=3;
        //    const skip=(page-1)*limits
        //     query=query.skip(skip).limit(limits)
        // }
       
    


        result = await query;
        res.status(200).json({
            staus: 200,
            result: result,
        });
    } catch (err) {
        res.status(400).json({
            staus: 200,
            result: err,
        });
    }
};

exports.get_one_tour = async (req, res) => {
    try {
        result = await Tour.findById(req.params.id);
        res.status(200).json({
            staus: 200,
            result: result,
        });
    } catch (err) {
        res.status(400).json({
            staus: 200,
            result: err,
        });
    }
};

exports.add_tour = async (req, res) => {
    try {
        const newtour = await Tour.create(req.body);
        res.status(200).json({
            staus: 400,
            result: "congrass!!!!",
            TOUR: newtour,
        });
    } catch (err) {
        res.status(400).json({
            staus: 400,
            result: "Oh ho Data is not added",
            TOUR: err,
        });
    }
};

exports.update_tour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "successfull",
            tour: tour,
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            tour: err,
        });
    }
};

exports.delete_tour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 200,
            result: "tour has beeen deleted",
            tour: tour,
        });
    } catch (err) {
        res.status(400).json({
            status: 200,
            result: "Invalid input",
            tour: err,
        });
    }
};
