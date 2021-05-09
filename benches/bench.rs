#![feature(test)]

extern crate conway_wasm;
extern crate test;

#[bench]
fn universe_tick(b: &mut test::Bencher) {
    let mut universe = conway_wasm::Universe::new();

    b.iter(|| {
        universe.tick();
    });
}
