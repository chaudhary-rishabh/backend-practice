export default function errorHandler(err, req, res, next) {
    req.status(404).json({ msg: "hello world" });
}