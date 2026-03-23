export const blogPosts = [
	{
		id: 1,
		slug: 'quantization-in-llms',
		date: 'March 24, 2026',
		title: 'Quantization in LLMs: Practical Notes from My Learning Journey',
		excerpt: 'A practical walkthrough of INT8, INT4, NF4, GPTQ, and AWQ with trade-offs for memory, quality, and serving cost.',
		readTime: '12 min read',
		tags: ['LLM', 'Quantization', 'Inference'],
		sections: [
			{
				heading: 'Why this matters',
				body: 'Large language models are often memory-bandwidth bound during inference. Quantization reduces precision and memory footprint so we can run larger models on constrained hardware while lowering cost per request.'
			},
			{
				heading: 'Core idea and memory math',
				body: 'Weights are stored in fewer bits, then dequantized in compute kernels. A rough memory estimate is parameters x bits per parameter / 8. For a 7B model, FP16 weights are about 14 GB while 4-bit weights are about 3.5 GB before runtime buffers and KV cache.'
			},
			{
				heading: 'Formats and approaches',
				body: 'FP16 or BF16 are quality baselines. INT8 is usually the first safe compression level. INT4 gives higher savings with possible quality loss. NF4 is popular with QLoRA. For post-training quantization, GPTQ and AWQ are common choices with good practical quality for many instruction-tuned models.'
			},
			{
				heading: 'What I learned while benchmarking',
				body: 'Average benchmark scores are not enough. I need prompt-level checks on my own tasks: long-context prompts, tool-calling prompts, and edge-case reasoning prompts. In many setups, quantization improved throughput but required careful calibration to avoid regressions on difficult inputs.'
			},
			{
				heading: 'Current rules of thumb',
				body: 'Use 8-bit when quality is critical and memory pressure is moderate. Move to 4-bit when VRAM is tight or multi-model serving is required. Keep a higher-precision fallback for sensitive production flows and always benchmark on real traffic patterns.'
			}
		]
	},
	{
		id: 2,
		slug: 'inference-optimization-for-llms',
		date: 'March 24, 2026',
		title: 'Inference Optimization for LLMs: Latency, Throughput, and Cost',
		excerpt: 'A running guide to batching, KV cache tuning, speculative decoding, and hardware-aware serving.',
		readTime: '11 min read',
		tags: ['LLM', 'Optimization', 'Serving'],
		sections: [
			{
				heading: 'The optimization objective',
				body: 'Inference work is a balancing problem: latency, throughput, and cost. Improving one metric can degrade another, so every change must be measured with a fixed workload and consistent model settings.'
			},
			{
				heading: 'Batching and scheduling',
				body: 'Dynamic batching usually gives the biggest throughput gain. The practical trick is setting queue delay limits so p95 latency does not spike. I also separate prefill-heavy and decode-heavy requests when traffic patterns are mixed.'
			},
			{
				heading: 'KV cache and memory management',
				body: 'KV cache growth can dominate memory at scale. Tuning max context length, token limits, and eviction strategy helps maintain stable throughput under bursty load. Quantization and cache-aware batching together often outperform either optimization alone.'
			},
			{
				heading: 'Speculative decoding and kernels',
				body: 'Speculative decoding can reduce generation time by using a draft model and verification path. The win depends on acceptance rate and verification overhead. Attention kernels, fused ops, and hardware-specific runtimes also matter for predictable speedups.'
			},
			{
				heading: 'My running checklist',
				body: 'For each experiment I record: p50 and p95 latency, tokens per second, peak memory, and prompt-level quality changes. If quality drops on realistic prompts, I treat the optimization as incomplete even when throughput improves.'
			}
		]
	}
];

export const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);
