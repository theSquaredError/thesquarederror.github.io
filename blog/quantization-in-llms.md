# Quantization in LLMs: Practical Notes from My Learning Journey

## Why this matters
Large language models are often memory-bandwidth bound during inference. Quantization reduces precision and memory footprint so we can run larger models on constrained hardware while lowering cost per request.

## Core idea and memory math
Weights are stored in fewer bits, then dequantized in compute kernels.

A rough memory estimate is:

`parameters x bits per parameter / 8`

For a 7B model:
- FP16 weights are about 14 GB
- 4-bit weights are about 3.5 GB

This estimate excludes runtime buffers and KV cache.

## Formats and approaches
- FP16 or BF16 are quality baselines.
- INT8 is usually the first safe compression level.
- INT4 gives higher savings with possible quality loss.
- NF4 is popular with QLoRA workflows.
- GPTQ and AWQ are common post-training quantization approaches.

## What I learned while benchmarking
Average benchmark scores are not enough. Prompt-level checks on my own tasks matter more:
- Long-context prompts
- Tool-calling prompts
- Edge-case reasoning prompts

In many setups, quantization improved throughput but required calibration to avoid quality regressions on difficult inputs.

## Current rules of thumb
- Use 8-bit when quality is critical and memory pressure is moderate.
- Move to 4-bit when VRAM is tight or multi-model serving is required.
- Keep a higher-precision fallback for sensitive production flows.
- Benchmark on real traffic patterns, not only synthetic workloads.
