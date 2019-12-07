import test from "ava"
import filea from "."

test("main", async (t) => {
    t.is(await filea("test/image.png"), "image/png")
    t.is(filea.sync("test/image.png"), "image/png")
})
