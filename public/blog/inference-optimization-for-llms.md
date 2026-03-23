# Inference Optimization for LLMs: Latency, Throughput, and Cost

## The optimization objective
Inference optimization is a balancing problem: latency, throughput, and cost. Improving one metric can degrade another, so every change must be measured with a fixed workload and consistent model settings.

## Batching and scheduling
Dynamic batching usually gives the biggest throughput gain. The practical trick is setting queue delay limits so p95 latency does not spike.

I also separate prefill-heavy and decode-heavy requests when traffic patterns are mixed.

## KV cache and memory management
KV cache growth can dominate memory at scale. Tuning max context length, token limits, and eviction strategy helps maintain stable throughput under bursty load.

Quantization plus cache-aware batching often outperform either optimization alone.

## Speculative decoding and kernels
Speculative decoding can reduce generation time by using a draft model and a verification path. The speedup depends on acceptance rate and verification overhead.

Attention kernels, fused ops, and hardware-specific runtimes also matter for predictable gains.

## My running checklist
For each experiment I record:
- p50 latency
- p95 latency
- tokens per second
- peak memory
- prompt-level quality changes

If quality drops on realistic prompts, I treat the optimization as incomplete even when throughput improves.
